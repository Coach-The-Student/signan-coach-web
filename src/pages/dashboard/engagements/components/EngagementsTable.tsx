import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/base"

function EngagementsTable({
  data
}:any) {
  return (
    <Table className="text-sm">
      <TableHeader>
        <TableRow>
          <TableHead>Status</TableHead>
          <TableHead>Coach</TableHead>
          <TableHead>Coachee</TableHead>
          <TableHead>Program</TableHead>
          <TableHead>Date Created</TableHead>
          <TableHead>Progress</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((detail:any) => (
          <TableRow>
            <TableCell>
              <div className="w-5 h-5 flex justify-center items-center rounded-full bg-primary-20">
                <div className="w-[22%] h-[22%] rounded-full bg-primary"></div>
              </div>
            </TableCell>
            <TableCell>{detail.coach}</TableCell>
            <TableCell>{detail.coachee}</TableCell>
            <TableCell>{detail.program}</TableCell>
            <TableCell>{detail.date}</TableCell>
            <TableCell className="text-center">
              <div className="w-full text-left flex flex-col gap-1 font-normal">
                20% Complete
                <div className="w-full h-2 bg-primary-20 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{width: "20%"}}></div>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default EngagementsTable