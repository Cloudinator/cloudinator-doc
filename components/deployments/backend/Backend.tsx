import Image from 'next/image';
import {Card} from "@/components/ui/card";

function MyButton() {

    return (
        <div className="flex flex-col items-center space-y-8 py-8">
            <Card className="border rounded-lg overflow-hidden shadow-xl w-96">
                <div className="p-4 flex justify-center">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="w-full h-auto"
                    />
                </div>
                <h1 className="text-center text-lg font-semibold px-4 pb-4">
                    Go to project dashboard and click on the project that you've just created
                </h1>
            </Card>

            <Card className="border rounded-lg overflow-hidden shadow-xl w-96">
                <div className="p-4 flex justify-center">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="w-full h-auto"
                    />
                </div>
                <h1 className="text-center text-lg font-semibold px-4 pb-4">
                    After that, you will see tabs of the project
                </h1>
            </Card>

            <Card className="border rounded-lg overflow-hidden shadow-xl w-96">
                <div className="p-4 flex justify-center">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="w-full h-auto"
                    />
                </div>
                <h1 className="text-center text-lg font-semibold px-4 pb-4">
                    Overview: is the details of your project (access your application with the URL here)
                </h1>
            </Card>

            <Card className="border rounded-lg overflow-hidden shadow-xl w-96">
                <div className="p-4 flex justify-center">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="w-full h-auto"
                    />
                </div>
                <h1 className="text-center text-lg font-semibold px-4 pb-4">
                    Resource: showing your code within the project
                </h1>
            </Card>

            <Card className="border rounded-lg overflow-hidden shadow-xl w-96">
                <div className="p-4 flex justify-center">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="w-full h-auto"
                    />
                </div>
                <h1 className="text-center text-lg font-semibold px-4 pb-4">
                    Activities: showing you your logs of each build
                </h1>
            </Card>

            <Card className="border rounded-lg overflow-hidden shadow-xl w-96">
                <div className="p-4 flex justify-center">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="w-full h-auto"
                    />
                </div>
                <h1 className="text-center text-lg font-semibold px-4 pb-4">
                    Report: list down all of your vulnerabilities
                </h1>
            </Card>

            <Card className="border rounded-lg overflow-hidden shadow-xl w-96">
                <div className="p-4 flex justify-center">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="w-full h-auto"
                    />
                </div>
                <h1 className="text-center text-lg font-semibold px-4 pb-4">
                    Setting: place for editing your project
                </h1>
            </Card>
        </div>
    );
}

export default function MyApp() {
    return <MyButton />;
}