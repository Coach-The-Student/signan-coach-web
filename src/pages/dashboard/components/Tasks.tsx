import { Button } from "@/components/base";

interface Props {
  type: string;
  message: string
}

function Assignment({
  type,
  message
}:Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-full" />
        <div className="flex flex-col">
          <h5 className="text-sm font-medium capitalize text-grey-text">{type}</h5>
          <p className="text-xs text-grey-text">{message}</p>
        </div>
      </div>
      <Button size="sm" className="text-[10px] bg-primary/10 text-grey-text">View Details</Button>
    </div>
  )
}

export default Assignment