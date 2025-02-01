import { Card, HorizontalLine } from "@/components/inc"
import { Assignment, Notification, SessionsTable } from "./components"
import { Button } from "@/components/base"

function Dashboard() {
  const notifications = [
    {
      type: "sessions",
      message: "Lorem ipsum dolor. Assumenda rem cumque vero saepe minima? Laudantium tempora provident beatae! Quidem, molestias."
    },
    {
      type: "sessions",
      message: "Lorem ipsum dolor. Assumenda rem cumque vero saepe minima? Laudantium tempora provident beatae! Quidem, molestias."
    }
  ]

  const assignments = [
    {
      type: "personal assignment",
      message: "Lorem ipsum dolor. Assumenda rem cumque vero saepe minima? Laudantium tempora provident beatae! Quidem, molestias."
    },
    {
      type: "personal assignment",
      message: "Lorem ipsum dolor. Assumenda rem cumque vero saepe minima? Laudantium tempora provident beatae! Quidem, molestias."
    }
  ]

  const sessions = [
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
    <div className="w-full h-full p-8">
      <div className="border border-border-grey p-6 rounded-xl flex flex-col gap-6">
        <Card>
          <Card.Header title="Notifications" />
          <Card.Body>
            <div className="w-full flex flex-col items-center gap-6">
              <div className="w-full">
                {notifications.map((notification, index) => (
                  <>
                    <Notification key={index} {...notification} />
                    {notifications.length !== index + 1 && <HorizontalLine className="my-3" />}
                  </>
                ))}
              </div>
              <Button size="sm" variant="secondary" className="font-light">View more</Button>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header title={`Sessions (${sessions.length})`} />
          <Card.Body>
            <div className="flex flex-col items-center gap-4">
              <SessionsTable data={sessions} />
              <Button size="sm" variant="secondary" className="font-light">View more</Button>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header title="Assignments" />
          <Card.Body>
            {assignments.map((assignment, index) => (
              <>
                <Assignment key={index} {...assignment} />
                {notifications.length !== index + 1 && <HorizontalLine className="my-4" />}
              </>
            ))}
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard