import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen font-primary bg-primary-900">
        <div className="container h-[85vh] xl:h-screen py-32 bg-radial-[at_50%_62%] from-primary-500 from-0% to-primary-400 to-100% rounded-xl text-center xl:text-left">
          <h1 className="h1 font-accent text-white">Your mom&apos;s favourite grocery manager</h1>
          <p className="mb-6 text-white">
            Done with food waste? Keep track of your ingredients &ndash; with <span className="font-bold">Expiravoid</span>!
          </p>
            <div className="flex flex-row justify-center gap-2 text-base">
              <Link
                
                href="shopping-list"
              >
                <Button
                  variant="light"
                >
                  Shopping List
                </Button>
              </Link>
              <Link
                href="recipes"
              >
                <Button
                  variant="outlineLight"
                >
                  Recipes
                </Button>
              </Link>
            </div>
        </div>
      </main>
    </div>
  );
}
