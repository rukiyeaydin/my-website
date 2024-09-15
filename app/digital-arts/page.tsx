import { Metadata } from "next";
// import DigitalArts from "./digital-arts";

export const metadata: Metadata = {
    title: "Digital Arts | Rukiye Aydin",
    metadataBase: new URL("https://example.com/digital-arts"),
    description: "Explore digital arts images by Rukiye Aydin",
    openGraph: {
        title: "Digital Arts | Rukiye Aydin",
        url: "https://example.com/digital-arts",
        description: "Explore digital arts by Rukiye Aydin",
        images: "https://raw.githubusercontent.com/example/example.com/main/public/images/illustrations/digital-arts.png",
    },
};

export default function Page() {
    return (
        <div>
            {/* <DigitalArts /> */}
        </div>
    );
}
