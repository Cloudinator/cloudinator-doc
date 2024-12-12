import Image from 'next/image';

function Frontend() {

    return (
        <>
            <div className="flex justify-center mb-8">
                <div className="max-w-md shadow-lg">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="rounded"
                    />
                </div>
            </div>
            <div className="text-lg font-bold mb-4">Go to project dashboard and click on the project that you've just created</div>
            <div className="flex justify-center mb-8">
                <div className="max-w-md shadow-lg">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="rounded"
                    />
                </div>
            </div>
            <div className="text-lg font-bold mb-4">After that, you will see tabs of the project</div>
            <div className="flex justify-center mb-8">
                <div className="max-w-md shadow-lg">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="rounded"
                    />
                </div>
            </div>
            <div className="text-lg font-bold mb-4">Overview: is the details of your project (access your application with the url here)</div>
            <div className="flex justify-center mb-8">
                <div className="max-w-md shadow-lg">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="rounded"
                    />
                </div>
            </div>
            <div className="text-lg font-bold mb-4">Resource: showing your code within the project</div>
            <div className="flex justify-center mb-8">
                <div className="max-w-md shadow-lg">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="rounded"
                    />
                </div>
            </div>
            <div className="text-lg font-bold mb-4">Activities: showing you your logs of each build</div>
            <div className="flex justify-center mb-8">
                <div className="max-w-md shadow-lg">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="rounded"
                    />
                </div>
            </div>
            <div className="text-lg font-bold mb-4">Report: list down all of your vulnerabilities</div>
            <div className="flex justify-center mb-8">
                <div className="max-w-md shadow-lg">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="rounded"
                    />
                </div>
            </div>
            <div className="text-lg font-bold mb-4">Setting: place for editing your project</div>
            <div className="flex justify-center">
                <div className="max-w-md shadow-lg">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="rounded"
                    />
                </div>
            </div>
        </>
    );
}

export default function MyApp() {
    return <Frontend />;
}