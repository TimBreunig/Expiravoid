import Image, { StaticImageData } from "next/image";

type CardProps = {
    title: string;
    img: string | StaticImageData;
    rating: number;
    duration: string;
};

export default function Card({
    title,
    img,
    rating,
    duration,
}: CardProps) {
	return (
        <div className="w-36 h-48 shrink-0 rounded-2xl shadow-md overflow-hidden">
            <div className="relative w-full h-full">
                <Image
                    src={img}
                    alt={`Image ${title}`}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-accent-0 from-0% via-accent-0/35 via-33% to-accent-0/0 to-47%" />

                <div className="absolute bottom-0 p-3">
                    <span className="block text-base font-bold text-accent-800">
                        {title}
                    </span>

                    <div className="flex items-start gap-3 text-[0.5625rem] font-semibold text-accent-700">
                        <div>{rating}</div>
                        <div>{duration}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};