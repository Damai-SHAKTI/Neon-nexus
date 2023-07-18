export default function faq() {
  return (
    <div className="w-full sm:w-[50%] mx-auto flex flex-col gap-4 items-center">
      <h1 className="my-4 text-3xl glowing-text-orange">Faq</h1>
      <div className="w-full px-4 py-2 border-2 border-orange-500 -skew-x-12">
        <p className="text-xl glowing-text-orange border-b-2 mb-2 border-orange-500">
          Do you ship worldwide?
        </p>
        <p>Yes, we ship worldwide.</p>
      </div>
      <div className="w-full px-4 py-2 border-2 border-orange-500 -skew-x-12">
        <p className="text-xl glowing-text-orange border-b-2 mb-2 border-orange-500">
          How do I clean my neon sign?
        </p>
        <p>To clean your neon sign, use a soft, damp cloth and gently wipe the surface of the glass tubes. Do not use harsh chemicals or abrasive cleaners, as they can damage the sign.</p>
      </div>
      <div className="w-full px-4 py-2 border-2 border-orange-500 -skew-x-12">
        <p className="text-xl glowing-text-orange border-b-2 mb-2 border-orange-500">
          What is your return policy?
        </p>
        <p>Please be aware that due to the custom nature of our neon signs, we do not offer returns or refunds.</p>
      </div>
    </div>
  )
}
