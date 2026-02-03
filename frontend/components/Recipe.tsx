export default function Recipe() {
  const ingredients = [
    {
			name: "Test",
      amount: "50",
      unit: "g",
		},
  ]

  return (
    <div>
            {ingredients.map((ingredient, index) => (
                <div
                    key={index}
                    className="container grid grid-cols-4"
                >
                    <div>
                        {ingredient.name}
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
        </div>
  );
}