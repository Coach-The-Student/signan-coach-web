import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/base"

function SessionsTable({
  data
}:any) {
  return (
    <Table className="text-sm">
      <TableHeader>
        <TableRow>
          <TableHead>Coach</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Session Details</TableHead>
          <TableHead>Sceduled Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((detail:any) => (
          <TableRow>
            <TableCell>{detail.coach}</TableCell>
            <TableCell>{detail.client}</TableCell>
            <TableCell>
              <h5 className="font-medium">{detail.details?.title}</h5>
              <p className="text-grey-text text-xs">{detail.details?.body}</p>
            </TableCell>
            <TableCell>{detail.date}</TableCell>
            <TableCell>{detail.status}</TableCell>
            <TableCell className="text-center">i</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default SessionsTable