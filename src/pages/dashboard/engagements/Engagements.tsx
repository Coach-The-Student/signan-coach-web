import { Button, Input } from "@/components/base"
import {
  Card
} from "@/components/inc"
import { EngagementsTable } from "./components"

function Engagements() {
  const engagements = [
    {
      "coach": "John Doe",
      "client": "Alice Smith",
      "details": {
        "title": "Initial Consultation",
        "body": "Discussed client's goals and set a roadmap for the next 3 months."
      },
      "date": "2023-10-15",
      "status": "Completed"
    },
    {
      "coach": "Jane Smith",
      "client": "Bob Johnson",
      "details": {
        "title": "Progress Review",
        "body": "Reviewed client's progress on fitness goals and adjusted the workout plan."
      },
      "date": "2023-10-20",
      "status": "Completed"
    },
    {
      "coach": "Emily Davis",
      "client": "Charlie Brown",
      "details": {
        "title": "Nutrition Planning",
        "body": "Created a customized meal plan to support the client's weight loss goals."
      },
      "date": "2023-10-25",
      "status": "Scheduled"
    },
    {
      "coach": "Michael Lee",
      "client": "Eva Green",
      "details": {
        "title": "Mindset Coaching",
        "body": "Worked on overcoming mental blocks and building confidence."
      },
      "date": "2023-11-01",
      "status": "Pending"
    },
    {
      "coach": "Sarah Wilson",
      "client": "David Clark",
      "details": {
        "title": "Career Strategy Session",
        "body": "Explored career advancement opportunities and created an action plan."
      },
      "date": "2023-11-05",
      "status": "Scheduled"
    }
  ]

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col gap-10">
      <section className="flex justify-between items-center mt-0 md:mt-6">
        <h2 className="text-xl lg:text-2xl font-bold">Engagements</h2>
        <div className="hidden lg:flex gap-2">
          <Button variant="outline" size="sm" className="text-grey-text font-normal">
            Active
            <div className="w-1.5 h-1.5 bg-primary rounded-full ml-1"></div>
          </Button>
          <Button variant="outline" size="sm" className="text-grey-text font-normal">
            Inactive
            <div className="w-1.5 h-1.5 bg-danger rounded-full ml-1"></div>
          </Button>
          <Button variant="outline" size="sm" className="text-grey-text font-normal">
            Completed
            <div className="w-1.5 h-1.5 bg-warning rounded-full ml-1"></div>
          </Button>
          <Button variant="outline" size="sm" className="text-grey-text font-normal">
            Drafts
            <div className="w-1.5 h-1.5 bg-border-grey rounded-full ml-1"></div>
          </Button>
        </div>
      </section>
      <div className="border border-border-grey p-2 md:p-6 rounded-xl flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <Input className="w-1/3 h-8" />
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-transparent">
              Column
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              Export
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              Filters
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              Select Actions
            </Button>
          </div>
        </div>
        <Card>
          <Card.Header title={`Engagements (${engagements.length})`} info="info" />
          <Card.Body>
            <EngagementsTable data={engagements} />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Engagements