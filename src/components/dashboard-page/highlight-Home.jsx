import { highlightMetrics } from '@/lib/data/dashboard';

const HighlightHome = () => {
  return (
    <div className="pt-4 px-0 xl:gap-16 sm:pt-4 xl:px-16">
      <div className="sm:border-border sm:border-2 border rounded-md py-3 sm-px-20 px-0 flex flex-row items-center justify-between">
        {highlightMetrics.map((highlight, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-2 my-2 sm:mx-4 sm:my-0"
            >
              <h2 className="text-primary text-xl sm:text-3xl font-bold flex flex-row">
                {highlight.prefix}
                {highlight.value}
                {highlight.postfix}
              </h2>
              <p className="text-muted-foreground text-[10px] sm:text-sm">{highlight.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HighlightHome;