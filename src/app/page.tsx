import RootLayout from "@/src/app/layout"
import withAuth from "../components/withAuth"

const WelcomePage = () => {
    return (
        <RootLayout>
            <h1>Hello</h1>
        </RootLayout>
    )
}

export default withAuth(WelcomePage)