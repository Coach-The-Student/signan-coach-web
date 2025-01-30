import { Card, HorizontalLine } from "@/components/inc"
import { Assignment, Notification } from "./components"

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

  return (
    <div className="w-full h-full p-8">
      <div className="border border-border-grey p-6 rounded-xl flex flex-col gap-6">
        <Card>
          <Card.Header title="Notifications" />
          <Card.Body>
            {notifications.map((notification, index) => (
              <>
                <Notification key={index} {...notification} />
                {notifications.length !== index + 1 && <HorizontalLine className="my-4" />}
              </>
            ))}
          </Card.Body>
        </Card>

        <Card>
          <Card.Header title={`Sessions`} />
          <Card.Body>
            {notifications.map((notification, index) => (
              <>
                <Notification key={index} {...notification} />
                {notifications.length !== index + 1 && <HorizontalLine className="my-4" />}
              </>
            ))}
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