import { Button } from "../Button/Button";

export function SummerBanner() {
  return (
    <div className="max-w-lg bg-white bg-opacity-55">
      <div className="px-20 py-12">
        <div className="mb-6 flex flex-col gap-3 break-words text-center">
          <h2 className="text-3xl font-bold">Letnie promocje do -70%!</h2>
          <p>Tylko najlepsze okazje!</p>
        </div>
        <Button value="sprawdź produkty" />
      </div>
    </div>
  );
}
