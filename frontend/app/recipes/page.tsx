import Card from "@/components/ui/card";
import Tab from "@/components/ui/tab";

export default function Recipes() {
    const recipes = [
        {
			title: "Beef Steak",
            img: "/images/image-steak.jpg",
            rating: 4.7,
            duration: "0:45h",
		},
        {
			title: "Rissole",
            img: "/images/image-steak.jpg",
            rating: 4.3,
            duration: "0:30h",
		},
        {
			title: "Shashlik",
            img: "/images/image-steak.jpg",
            rating: 4.8,
            duration: "1:45h",
		},
    ]

    return (
        <div className="min-h-screen font-primary">
            <div className="w-full h-38 bg-primary-500 rounded-b-xl">

            </div>
            <div className="container flex flex-row gap-2 my-4">
                <Tab text="vegetarian" />
                <Tab text="vegan" />
                <Tab text="pescetarian" />
            </div>
            <div className="pl-6 mt-12 flex flex-col gap-6 bg-white dark:bg-black">
                <div>
                    <h2 className="h4">Meat</h2>
                    <div className="overflow-x-scroll flex flex-row items-start justify-start gap-3">
                        {recipes.map((recipe, index) => (
                            <Card
                                key={index}
                                title={recipe.title}
                                img={recipe.img}
                                rating={recipe.rating}
                                duration={recipe.duration}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="h4">Salad</h2>
                    <div className="overflow-x-scroll flex flex-row items-start justify-start gap-3">
                        {recipes.map((recipe, index) => (
                            <Card
                                key={index}
                                title={recipe.title}
                                img={recipe.img}
                                rating={recipe.rating}
                                duration={recipe.duration}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="h4">Pasta</h2>
                    <div className="overflow-x-scroll flex flex-row items-start justify-start gap-3">
                        {recipes.map((recipe, index) => (
                            <Card
                                key={index}
                                title={recipe.title}
                                img={recipe.img}
                                rating={recipe.rating}
                                duration={recipe.duration}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}