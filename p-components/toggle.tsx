import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-[#ffffff]' : 'bg-[#ffffff]'}
           relative inline-flex h-[22px] w-[47px] shrink-0 cursor-pointer rounded-full border-2 border-[#9EBB9D] transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            enabled ? 'translate-x-0 bg-[#C7784C]' : 'translate-x-[25px]'
          }
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-[#9EBB9D] shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
