import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/base"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/inc"
import { moreHorizontal } from "@/assets/icons"

function SessionsTable({
  data
}:any) {
  return (
    <Table className="text-sm">
      <TableHeader>
        <TableRow>
          <TableHead>Coach</TableHead>
          <TableHead>Client</TableHead>
          <TableHead className="hidden md:block">Session Details</TableHead>
          <TableHead>Scheduled Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((detail:any) => (
          <TableRow>
            <TableCell>{detail.coach}</TableCell>
            <TableCell>{detail.client}</TableCell>
            <TableCell className="hidden md:block">
              <h5 className="font-medium">{detail.details?.title}</h5>
              <p className="text-grey-text text-xs">{detail.details?.body}</p>
            </TableCell>
            <TableCell>{detail.date}</TableCell>
            <TableCell>{detail.status}</TableCell>
            <TableCell className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <img src={moreHorizontal} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-44">
                  <DropdownMenuItem>View</DropdownMenuItem>
                  <DropdownMenuItem>Manage</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default SessionsTable