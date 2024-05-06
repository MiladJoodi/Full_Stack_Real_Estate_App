import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@nextui-org/react";
import UserProfilePanel from "./UserProfilePanel";
import prisma from "@/lib/prisma";

const SignInPanel = async () => {
  const { isAuthenticated, getUser } = await getKindeServerSession();
  const user = await getUser();
  const dbUser = await prisma.user.findUnique({
    where: {
        id: user?.id,
    },
  });
  if (await isAuthenticated()){
    
  }
    return (
      <>
        {dbUser!! &&
        <UserProfilePanel user={dbUser} />
      }
      </>
    );

  return (
    <div className="flex gap-3">
      <Button color="primary">
        <LoginLink>Sign In</LoginLink>
      </Button>
      <Button>
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  );
};

export default SignInPanel;
