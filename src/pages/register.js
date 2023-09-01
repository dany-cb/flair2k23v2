import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Textarea } from "@/components/ui/textarea";
import { request } from "@/lib/utils";
import { useRouter } from "next/router";
import Header from "@/components/header";

const register = () => {
  const router = useRouter();
  const eventTeamCount = {
    "Stellar Hunt": 3,
    "Celestial Canvas": 1,
    "Orbiting Oddities": 1,
    "Space Complexity": 1,
    Tesseract: 3,
    "Pitch Black": 3,
    Constellations: 3,
  };
  const [errors, setErrors] = useState({});
  const [eventName, setEventName] = useState("Stellar Hunt");
  const [form, setForm] = useState({
    eventName: "Stellar Hunt",
    teamName: "",
    members: [],
    deptOther: false,
  });

  useEffect(() => {
    if (eventTeamCount[eventName] !== undefined) {
      let newForm = { ...form };
      newForm.members = [];
      newForm.eventName = eventName;
      for (let i = 0; i < eventTeamCount[eventName]; i++) {
        newForm.members.push({
          name: "",
          email: "",
          phoneNo: "",
          regNo: "",
          institution: "",
          year: "",
          department: "",
        });
      }
      setForm(newForm);
    }
  }, [eventName]);

  const validateForm = () => {
    const newErrors = {};
    if (form.teamName === "") {
      newErrors.teamName = "Team Name is required";
    }
    form.members.forEach((member, index) => {
      if (member.name === "") {
        newErrors[`name_${index}`] = `Member ${index + 1} Name is required`;
      }
      if (member.regNo === "") {
        newErrors[`regNo_${index}`] = `Member ${
          index + 1
        } Register No. is required`;
      }
      if (member.email === "") {
        newErrors[`email_${index}`] = `Member ${index + 1} Email is required`;
      }
      if (member.phoneNo === "") {
        newErrors[`phoneNo_${index}`] = `Member ${
          index + 1
        } Phone No. is required`;
      }
      if (member.institution === "") {
        newErrors[`institution_${index}`] = `Member ${
          index + 1
        } Institution is required`;
      }
      if (member.year === "") {
        newErrors[`year_${index}`] = `Member ${
          index + 1
        } Year of Study is required`;
      }
      if (member.department === "") {
        newErrors[`department_${index}`] = `Member ${
          index + 1
        } Department is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit() {
    if (!validateForm()) {
      alert("Please fill all the fields");
      return;
    }
    console.log(form);

    const options = {
      method: "post",
      url: `/api/addParticipants`,
      data: {
        ...form,
      },
    };
    const { data, error } = await request(options);
    console.log({ data, error });
    if (error) {
      alert("Something went wrong");
    } else {
      router.push("/");
    }
  }

  return (
    <main>
      <Header />
      <section className="flex justify-center items-center mt-[60px]">
        <div className="glasscard block m-5 rounded-lg w-fit lg:w-1/3 md:w-3/4 h-1/2 bg-slate-800 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <h5 className="mb-2 text-3xl font-medium leading-tight">Register</h5>
          <Select
            onValueChange={(val) => setEventName(val)}
            defaultValue={eventName}
          >
            <SelectTrigger className="w-[180px] mt-5 border-gray-700">
              <SelectValue placeholder="Select a event" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Events</SelectLabel>
                <SelectItem value="Stellar Hunt">Stellar Hunt</SelectItem>
                <SelectItem value="Celestial Canvas">
                  Celestial Canvas
                </SelectItem>
                <SelectItem value="Orbiting Oddities">
                  Orbiting Oddities
                </SelectItem>
                <SelectItem value="Space Complexity">
                  Space Complexity
                </SelectItem>
                <SelectItem value="Tesseract">Tesseract</SelectItem>
                <SelectItem value="Pitch Black">Pitch Black</SelectItem>
                <SelectItem value="Constellations">Constellations</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="mt-4">
            <div className="form-group">
              <div className="flex flex-col w-full max-w-sm justify-start space-y-3">
                <Label htmlFor="teamName">Team Name</Label>
                <Input
                  type="text"
                  id="teamName"
                  value={form.teamName}
                  placeholder="Team Name"
                  className="border-gray-700"
                  onChange={(e) =>
                    setForm({ ...form, teamName: e.target.value })
                  }
                />
              </div>
            </div>
            {Array.from(Array(eventTeamCount[eventName]).keys()).map((i) => (
              <div key={i} className="space-y-5">
                <div className="flex items-center justify-center">
                  <hr className="w-52 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10" />
                </div>
                <div className="form-group">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor={"mem_" + (i + 1)}>
                      Member {i + 1} Name
                    </Label>
                    <Input
                      type="text"
                      className="border-gray-700"
                      id={"mem_" + (i + 1)}
                      placeholder={"Member " + (i + 1) + " Name"}
                      value={form.members[i]?.name}
                      onChange={(e) => {
                        let newForm = { ...form };
                        newForm.members[i].name = e.target.value;
                        setForm(newForm);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor={"mem_" + (i + 1)}>
                      Member {i + 1} Email
                    </Label>
                    <Input
                      type="text"
                      className="border-gray-700"
                      id={"mem_" + (i + 1)}
                      placeholder={"Member " + (i + 1) + " Email"}
                      value={form.members[i]?.email}
                      onChange={(e) => {
                        let newForm = { ...form };
                        newForm.members[i].email = e.target.value;
                        setForm(newForm);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor={"mem_" + (i + 1)}>
                      Member {i + 1} Register No.
                    </Label>
                    <Input
                      type="text"
                      className="border-gray-700"
                      id={"mem_" + (i + 1)}
                      placeholder={"Member " + (i + 1) + " Register No."}
                      value={form.members[i]?.regNo}
                      onChange={(e) => {
                        let newForm = { ...form };
                        newForm.members[i].regNo = e.target.value;
                        setForm(newForm);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor={"phoneNo_" + (i + 1)}>
                      Member {i + 1} phoneNo
                    </Label>
                    <Input
                      type="text"
                      className="border-gray-700"
                      id={"phoneNo_" + (i + 1)}
                      placeholder={"Member " + (i + 1) + " phoneNo"}
                      value={form.members[i]?.phoneNo}
                      onChange={(e) => {
                        let newForm = { ...form };
                        newForm.members[i].phoneNo = e.target.value;
                        setForm(newForm);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor={"insti_" + (i + 1)}>
                      Member {i + 1} Institution Name
                    </Label>
                    <Input
                      type="text"
                      className="border-gray-700"
                      id={"insti_" + (i + 1)}
                      value={form.members[i]?.institution}
                      placeholder={"Member " + (i + 1) + " Institution"}
                      onChange={(e) => {
                        let newForm = { ...form };
                        newForm.members[i].institution = e.target.value;
                        setForm(newForm);
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yof">Year of study</Label>
                  <RadioGroup
                    defaultValue=""
                    value={form.members[i]?.year.toString()}
                    onValueChange={(val) => {
                      let newForm = { ...form };
                      newForm.members[i].year = parseInt(val);
                      setForm(newForm);
                    }}
                    className="flex flex-wrap gap-2 "
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="1"
                        id="y1"
                        className="border-slate-500 text-slate-300"
                      />
                      <Label htmlFor="y1">1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="2"
                        id="y2"
                        className="border-slate-500 text-slate-300"
                      />
                      <Label htmlFor="y2">2</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="3"
                        id="y3"
                        className="border-slate-500 text-slate-300"
                      />
                      <Label htmlFor="y3">3</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="4"
                        id="y4"
                        className="border-slate-500 text-slate-300"
                      />
                      <Label htmlFor="y4">4</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div class="form-group">
                  <Label htmlFor="dept">Department</Label>
                  <Select
                    onValueChange={(val) => {
                      let newForm = { ...form };
                      newForm.members[i].department = val;
                      if (val === "other") {
                        newForm.deptOther = true;
                      } else {
                        newForm.deptOther = false;
                      }
                      setForm(newForm);
                    }}
                    defaultValue={form.members[i]?.department}
                  >
                    <SelectTrigger className="w-[180px] border-gray-700">
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Departments</SelectLabel>
                        <SelectItem value="cse">CSE</SelectItem>
                        <SelectItem value="ece">ECE</SelectItem>
                        <SelectItem value="eee">EEE</SelectItem>
                        <SelectItem value="mech">MECH</SelectItem>
                        <SelectItem value="civil">CIVIL</SelectItem>
                        <SelectItem value="chem">CHEM</SelectItem>
                        <SelectItem value="meta">META</SelectItem>
                        <SelectItem value="prod">PROD</SelectItem>
                        <SelectItem value="biotech">BIOTECH</SelectItem>
                        <SelectItem value="ice">ICE</SelectItem>
                        <SelectItem value="archi">ARCHI</SelectItem>
                        <SelectItem value="mca">MCA</SelectItem>
                        <SelectItem value="msc">MSC</SelectItem>
                        <SelectItem value="phd">PHD</SelectItem>
                        <SelectItem value="other">OTHER</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {form.deptOther && (
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="other_dept">Other Department</Label>
                      <Input
                        type="text"
                        className="border-gray-700"
                        id="other_dept"
                        placeholder="Other Department"
                        value={form.members[i]?.dept}
                        onChange={(e) => {
                          let newForm = { ...form };
                          newForm.members[i].dept = e.target.value;
                          setForm(newForm);
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="textarea">How Can We Help You?</Label>
            <Textarea name="textarea" id="textarea" ="" rows="5" />
          </div> */}
            <Button
              variant="outline"
              onClick={handleSubmit}
              className=" border-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 mt-7"
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default register;
