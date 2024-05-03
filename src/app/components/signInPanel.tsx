import { LoginLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@nextui-org/react";

const SignInPanel = async () => {
    const {isAuthenticated, getUser} = await getKindeServerSession();
    const user = await getUser();
    if(await isAuthenticated()) return <div>{user?.given_name}</div>;

    return (
        <div className="flex gap-3">
            <Button color="primary">
                <LoginLink>Sign In</LoginLink>
            </Button>
            <Button>
                <LoginLink>Sign Up</LoginLink>
            </Button>
        </div>
    );
}

export default SignInPanel;