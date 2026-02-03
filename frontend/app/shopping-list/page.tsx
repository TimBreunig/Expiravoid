"use client";

export default function ShoppingList() {
    function addItem() {
        alert('Add item!');
    }

    const ingredients = [
        {
			name: "Test1",
            category: "Breakfast",
            amount: "50",
            unit: "g",
		},
        {
			name: "Test2",
            category: "Lunch",
            amount: "100",
            unit: "ml",
		},
    ]

    return (
        <div className="min-h-screen font-primary">
            <main className="container flex min-h-screen flex-col items-center justify-start py-32 bg-primary-900 dark:bg-black sm:items-start">
                {ingredients.map((ingredient, index) => (
                    <div
                        key={index}
                        className="container grid grid-cols-6"
                    >
                        <div className="col-span-2">
                            {ingredient.name}
                        </div>
                        <div className="col-span-2">
                            {ingredient.category}
                        </div>
                        <div>
                            {ingredient.amount}
                        </div>
                        <div>
                            {ingredient.unit}
                        </div>
                    </div>
                    )
                )}

                <button
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                    onClick={addItem}
                >
                    Add Item
                </button>
            </main>
        </div>
    );
}