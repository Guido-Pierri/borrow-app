import { useState } from "react"

interface FormData {
  name: string
  email: string
}

export default function MyPage() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const response = await fetch("/api/my-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()
    console.log(data)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
