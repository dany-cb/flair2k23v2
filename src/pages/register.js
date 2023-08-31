import { useState, forwardRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { Textarea } from "@/components/ui/textarea";
import { request } from "@/lib/utils";

const register = () => {
  const eventTeamCount = {
    stellar_hunt: 3,
    cosmic_chron: 3,
    celes_can: 5,
    oo: 3,
    sp_complex: 5,
    tesseract: 3,
    pitch_black: 3,
    constell: 3,
  };
  const [eventName, setEventName] = useState("stellar_hunt");
  const [form, setForm] = useState({
    team_name: "",
  });

  useEffect(() => {
    if (eventTeamCount[eventName] !== undefined) {
      setForm((prev) => {
        let newForm = { ...prev };
        for (let i = 1; i <= eventTeamCount[eventName]; i++) {
          newForm[`member${i}`] = {
            email: "",
            contact: "",
            institution: "",
            year: "",
            dept: "",
          };
        }
        return newForm;
      });
    }
  }, [eventName]);

  async function handleSubmit() {
    const options = {
      method: "post",
      url: `/api/addParticipants`,
      data: {
        form,
      },
    };
    const { data, error } = await request(options);
    console.log({ data, error });
    // return { data, error };
  }

  return (
    <section className="flex justify-center items-center">
      <div class="block m-5 rounded-lg w-1/2 h-1/2 bg-slate-800 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5 class="mb-2 text-xl font-medium leading-tight ">Register</h5>
        <Select
          onValueChange={(val) => setEventName(val)}
          defaultValue={eventName}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a event" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Events</SelectLabel>
              <SelectItem value="stellar_hunt">Stellar Hunt</SelectItem>
              <SelectItem value="cosmic_chron">Cosmic Chronicles</SelectItem>
              <SelectItem value="celes_can">Celestial Canvas</SelectItem>
              <SelectItem value="oo">Orbiting Oddities</SelectItem>
              <SelectItem value="sp_complex">Space Complexity</SelectItem>
              <SelectItem value="tesseract">Tesseract</SelectItem>
              <SelectItem value="pitch_black">Pitch Black</SelectItem>
              <SelectItem value="constell">Constellation</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div>
          <div class="form-group">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="team_name">Team Name</Label>
              <Input
                type="text"
                id="team_name"
                value={form.team_name}
                placeholder="Team Name"
                required
                onChange={(e) =>
                  setForm({ ...form, team_name: e.target.value })
                }
              />
            </div>
          </div>
          {
            // Team Members
            Array.from(Array(eventTeamCount[eventName]).keys()).map((i) => (
              <div key={i}>
                <div className="flex items-center justify-center">
                  <hr className="my-5 w-3/4" />
                </div>
                <div class="form-group">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor={"mem_" + (i + 1)}>
                      Member {i + 1} Email
                    </Label>
                    <Input
                      type="text"
                      id={"mem_" + (i + 1)}
                      placeholder={"Member " + (i + 1) + " Email"}
                      required
                      value={form[`member${i + 1}`]?.email}
                      onChange={(e) => {
                        let newForm = { ...form };
                        newForm[`member${i + 1}`].email = e.target.value;
                        setForm(newForm);
                      }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor={"contact_" + (i + 1)}>
                      Member {i + 1} Contact
                    </Label>
                    <Input
                      type="text"
                      id={"contact_" + (i + 1)}
                      value={form[`member${i + 1}`]?.contact}
                      placeholder={"Member " + (i + 1) + " Contact"}
                      required=""
                      onChange={(e) => {
                        let newForm = { ...form };
                        newForm[`member${i + 1}`].contact = e.target.value;
                        setForm(newForm);
                      }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor={"insti_" + (i + 1)}>Institution Name</Label>
                    <Input
                      type="text"
                      id={"insti_" + (i + 1)}
                      value={form[`member${i + 1}`]?.institution}
                      placeholder="Institution Name"
                      required=""
                      onChange={(e) => {
                        let newForm = { ...form };
                        newForm[`member${i + 1}`].institution = e.target.value;
                        setForm(newForm);
                      }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <Label htmlFor="yof">Year of study</Label>
                  <RadioGroup
                    defaultValue=""
                    value={form[`member${i + 1}`]?.year}
                    onChange={(e) => {
                      let newForm = { ...form };
                      newForm[`member${i + 1}`].year = e.target.value;
                      setForm(newForm);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="year1" id="y1" />
                      <Label htmlFor="y1">1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="year2" id="y2" />
                      <Label htmlFor="y2">2</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="year3" id="y3" />
                      <Label htmlFor="y3">3</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="year4" id="y4" />
                      <Label htmlFor="y4">4</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div class="form-group">
                  <Label htmlFor="dept">Department</Label>
                  <RadioGroup
                    defaultValue=""
                    value={form[`member${i + 1}`]?.dept}
                    onChange={(e) => {
                      let newForm = { ...form };
                      newForm[`member${i + 1}`].dept = e.target.value;
                      setForm(newForm);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cse" id="cse" />
                      <Label htmlFor="cse">CSE</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ece" id="ece" />
                      <Label htmlFor="ece">ECE</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="eee" id="eee" />
                      <Label htmlFor="eee">EEE</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="IT" id="it" />
                      <Label htmlFor="it">IT</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mech" id="mech" />
                      <Label htmlFor="mech">MECH</Label>
                    </div>
                  </RadioGroup>
                  <Input
                    type="text"
                    placeholder="Others"
                    name="other_dept"
                    id="other_dept"
                    className="grid w-full max-w-sm items-center gap-1.5"
                    onChange={(e) => {
                      let newForm = { ...form };
                      newForm[`member${i + 1}`].dept = e.target.value;
                      setForm(newForm);
                    }}
                  ></Input>
                </div>
              </div>
            ))
          }

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="textarea">How Can We Help You?</Label>
            <Textarea name="textarea" id="textarea" required="" rows="5" />
          </div>
          <Button variant="outline" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default register;
