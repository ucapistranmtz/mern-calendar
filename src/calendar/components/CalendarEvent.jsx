 




export const CalendarEvent = (props) => {
   // console.log((props.event))
    const { title, user} = props.event
  return (
    <>
    <strong> {title}</strong>
    <span>-{user.name}</span>


    </>
  )
}
