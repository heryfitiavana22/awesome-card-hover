export function Card({ description, title }: CardProps) {
  return (
    <a
      href="#"
      className="flex-1 flex flex-col h-full overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900"
    >
      <div className="flex flex-col flex-1 px-4 py-5 gap-x-8 gap-y-4 rounded-xl sm:p-6 bg-gray-900">
        <div>
          <div className="mb-2 pointer-events-none"></div>
          <p className="text-base font-bold text-gray-900 truncate dark:text-white">
            {title}
          </p>
          <div className="text-[15px] text-gray-400 mt-1">{description}</div>
        </div>
      </div>
    </a>
  );
}

type CardProps = {
  title: string;
  description: string;
};
