import * as numberFlow from 'number-flow'
import clsx from 'clsx/lite';

export default function PriceWithDiff({ value, diff, currency = false }) {
    return (
      <div>
        <div
          style={{ '--number-flow-char-height': '0.85em' }}
          className="flex items-center gap-4 font-semibold"
        >
          <numberFlow.NumberFlow
            value={value}
            locales="en-US"
            format={currency ? { style: 'currency', currency: 'USD' } : {}}
            className="~text-2xl/4xl"
          />
          <numberFlow.NumberFlow
            value={diff}
            locales="en-US"
            format={{ style: 'percent', maximumFractionDigits: 2, signDisplay: 'always' }}
            className={clsx(
              '~text-lg/2xl transition-colors duration-300',
              diff < 0 ? 'text-red-500' : 'text-emerald-500'
            )}
          />
        </div>
      </div>
    );
  }
  
