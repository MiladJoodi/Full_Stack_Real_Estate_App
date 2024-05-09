import PageTitle from "@/app/components/pageTitle";
import { getUserById } from "@/lib/actions/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Card } from "@nextui-org/react";
import SectionTitle from "./_components/sectionTitle";

const ProfilePage = async () => {

    const { getUser } = await getKindeServerSession();
    const user = await getUser();
    const dbUser = await getUserById(user ? user.id : "");


    return (
        <div>
            <PageTitle title="My Profile" linkCaption="Back To Home Page" href="/" />
            <Card className="m-4 p-4">
                <SectionTitle title="Basic Information" />
            </Card>
        </div>
    );
}

export default ProfilePage;