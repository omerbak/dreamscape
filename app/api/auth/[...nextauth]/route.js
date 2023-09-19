import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const nextOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        console.log("authorize");
        console.log("authorize", credentials);
        try {
          const url = `https://dreamscape-api-iswd.onrender.com/user/getUser?email=${credentials.email}`;
          const res = await fetch(url);
          const user = await res.json();
          console.log(user);

          if (!user || !user.password) {
            console.log("authorize no user / no pass");
            return null;
          } else {
            console.log("authorize compare passwords");
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            console.log("isPassword correct", isPasswordCorrect);
            if (isPasswordCorrect) {
              return user;
            } else {
              return null;
            }
          }
        } catch (err) {
          console.log("authorize Error", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      /*  console.log("sign in callback", {
        user,
        account,
        profile,
        email,
        credentials,
      }); */

      if (account?.provider === "credentials") return true;

      try {
        const res = await fetch(
          "https://dreamscape-api-iswd.onrender.com/user/addUser",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: profile.email,
              role: "user",
            }),
          }
        );
        /* console.log("signin callback res", res); */
        if (res.status === 200 || res.status === 409) return true;
        return false;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    async jwt({ token, profile, user, session, account }) {
      console.log("jwt callback: ", { token, profile, user, session, account });

      if (account?.provider === "credentials") {
        return {
          ...token,
          id: user.id,
          role: user.role,
        };
      }

      if (user) {
        const res = await fetch(
          `https://dreamscape-api-iswd.onrender.com/user/getUser?email=${user.email}`
        );
        const userDB = await res.json();
        console.log("jwt userDB", userDB);
        return {
          ...token,
          id: userDB._id,
          role: userDB.role,
        };
      }
      return token;
    },
    async session({ token, user, session }) {
      console.log("session callback: ", { token, user, session });
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
          id: token.id,
        },
      };
    },
  },
  pages: {
    signIn: "/sign",
  },
};
const handler = NextAuth(nextOptions);

export { handler as GET, handler as POST };
