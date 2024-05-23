import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Popup from "../Components/Popup"
import { removeContact } from "../Redux/action"
import "../contact.css";
const Contacts = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [singleContact, setSingleContact] = useState({})
    let data = undefined
    const AllContacts = useSelector((store) => store.contacts)
    const dispatch = useDispatch()
    // console.log(AllContacts)

    const togglePopup = (contact) => {

        setSingleContact(contact)

        setIsOpen(!isOpen)


    }
    useEffect(() => {

    }, [dispatch, AllContacts.length])
    return (    
        <div className="justify-center pt-16 text-gray-50 p-4 w-full">
        <div className="m-4">
          <Link to="/contact_form" className="animated-button">
            Create Contact
          </Link>
        </div>
            {AllContacts.length == 0 && <div className=" m-auto w-fit p-4 align-middle text-blue-500 justify-center">

            <svg
  width="400"
  height="400"
  viewBox="0 0 400 400"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>

  <circle cx="200" cy="200" r="180" fill="#F3F4F6" />


  <g id="personWithPhone">

    <rect
      x="150"
      y="150"
      width="100"
      height="200"
      fill="#3B82F6"
    >
      <animate
        attributeName="height"
        from="200"
        to="210"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0s"
      />
    </rect>

    <circle
      cx="200"
      cy="130"
      r="20"
      fill="#3B82F6"
    >
      <animate
        attributeName="r"
        from="20"
        to="22"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0s"
      />
    </circle>


    <rect
      x="170"
      y="160"
      width="60"
      height="110"
      fill="#D1D5DB"
    >
      <animate
        attributeName="height"
        from="110"
        to="120"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0s"
      />
      <animate
        attributeName="width"
        from="60"
        to="65"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0s"
      />
    </rect>

    
    <rect
      x="180"
      y="170"
      width="40"
      height="90"
      fill="#6B7280"
    >
      <animate
        attributeName="height"
        from="90"
        to="100"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0s"
      />
      <animate
        attributeName="width"
        from="40"
        to="45"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0s"
      />
    </rect>


    <path
      d="M180 220C180 225.523 184.477 230 190 230C195.523 230 200 225.523 200 220H180Z"
      fill="#3B82F6"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0s"
      />
    </path>
  </g>
</svg>


<svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50" font-family="Arial" font-size="16" fill="#333">
    <tspan dy="0" id="noContactText">No Contacts Tap "Create Contact" to Connect!</tspan>
    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
  </text>
</svg>


            </div>}
            <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {
                    AllContacts.map((el) => {
                        return <div key={el.id} className="bg-blue-950 rounded-lg shadow-md m-4 p-4 text-white">
                            <div onClick={() => togglePopup(el)} className="w-3/4 m-auto  ">
                                <img className="w-full rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAANlBMVEWVu9////+QuN6Mtt3K3O7j7Pby9vvE2OyavuCvy+akxOPY5fLp8Pj6/P260umqyOWFstvR4PDphOmSAAADqElEQVR4nO1b27KiMBCECbkCgfz/zy43dT0HyTRmdGuLfrJKyzSTuXZIVV24cOFCARCpGURfWVy54G3TzmisD059lMb00LE19d8wOlafs8UY2noPbRg/sj45vbv+DO0+YAayL9efYcUp0GsDbGYQpqBMhsDkk0qSAHVZAnXdCVqB9mPgJ1oxChRZBOo6ilHomQx6ofVVYhKo6yTjjcQmUNci20ANwKARoZBPBQ8YCQIDQKCuh/IEoE0Q2YZsQXiGQHlwiBtMjuCKM8DcQMIRPMjAlyZAKIPitSHTGn2CARaMAuF4MTjhB8WbZnZ/dEN5T4TzQfG0/P2cGLhN4oo+FGfw/crEGlYeEBhbFG9auUGX75bBcJQYWgLEoLwjVvyJaYbI1AQ1iiIqwj8wsSCOIOIG1QgwkBHVCJidhQQEfnESmNkWMGSsFWJiFrtPEhQVeUYQqIs3KJ4RRHVVjhFE1IsbWAVSTsubMeb7lE5Y4ne5CtnLueGK7D7I7sFC4dvnC1NIHlXpRlTav1N4vRFRnMBqYvL7acFsk5rcRlBl1fZhr1CnbWllZTiQctPE0G5mVi49h2Wf3PbVOP+s+AEoqSquueh+fkI0JG1mGr3RaXicdq6TTRerciSmp/f6vvOde3Ag50IIztF9fXL3pGm0L2OJ6VnbJ4P3/rXDq/j803Z4+ySYyP72ex32Oajwe6Qw9j07kN8vA3r49b+TrfZHmv4dNeVgSOma4GZPWFG50LyumufHl8zRltGtjd77aFt93LmcPfiCBbzXOFmvsHH9GKeaBvBQ5RinZmlUvjvGiSlKlTTBKV0J1A9zwPXFgoGwAg6HERMw8zBoE+8KE4ADEhbz8wDbeEAv4QLUVUAVmQNQaUbeduACY1A2Ia6A0mLxbDADygiglM9DCyXm8o44uSJCADzS4QESuEo2Jw8AxQk+XOQBaJpFQgEKBpFQgIJBSYTCFAx8BiQRClMw8HchK9mdAyD0Fe4R7wz44SgTjMAbQkLpAEgIAi3aCnajJpSQgJQEv3fDBVtIEEqJQFK8GEAvJmNgqznfj8ay8skDkJCSyleGPgHrz9r5jpb6Dox1qIpCozsQKTF0jRtP6XlEzma0yjyMtu4deZuUG5ruLAvTNUMJhZ9UNfy8wsVYvY1DwUOO5Q5dsElzQqTXyQaZ+3aLij7EpDuzx6Q3nU7TgxMJX3AjtZzuDD42KS13+1Jqoh+W056P3vCbH1Wp7YLjd644Xrhw4T/DHzhTKer8tGZTAAAAAElFTkSuQmCC" alt="" />
                                <div className="p-4">
                                    {isOpen &&
                                        <Popup close={() => togglePopup(data)} el={singleContact} />

                                    }
                                </div>    <div className="text-left">
                                    <p>First Name : {el.first_name}</p>
                                    <p>Last Name  : {el.last_name}</p>
                                    {/* <p>Mobile   : {el.mob}</p> */}
                                    <p>Status     : {el.status == "active" ? "Active" : "Inactive"}</p>
                                </div>

                            </div>

                            <div className="flex justify-between my-2">
                                <Link to={`edit/${el.id}`}>
                                    <button className="rounded p-2 bg-violet-600 text-black">

                                        Edit
                                    </button>
                                </Link>

                                <button onClick={() => dispatch(removeContact(el.id))} className="rounded p-2 bg-red-600 text-white">Delete</button>
                            </div>
                        </div>
                    })
                }


            </div>

        </div>
    )
}

export default Contacts
