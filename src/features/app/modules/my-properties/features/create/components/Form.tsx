import { Button, Form, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

const CreatePropertyForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <>
      <Form validationBehavior="native" onSubmit={onSubmit}>
        <Input
          isRequired
          errorMessage="Please enter a property name"
          label="Property name"
          labelPlacement="outside"
          name="propertyName"
          placeholder="Enter property name"
          type="text"
          className="w-[500px]"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid address"
          label="Address"
          labelPlacement="outside"
          name="address"
          placeholder="Enter property address"
          type="text"
          className="w-[500px]"
        />
        <Textarea
          className="w-[500px]"
          isRequired
          errorMessage="Please enter a valid description"
          label="Description"
          labelPlacement="outside"
          name="description"
          placeholder="Enter a brief description about the property"
          type="text"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid rooms number"
          label="Rooms"
          labelPlacement="outside"
          name="rooms"
          placeholder="0"
          type="number"
          className="w-[500px]"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid bathrooms number"
          label="Bathrooms"
          labelPlacement="outside"
          name="bathrooms"
          placeholder="0"
          type="number"
          className="w-[500px]"
        />
        <Input
          isRequired
          errorMessage="Please enter at least one amenity"
          label="Amenities"
          labelPlacement="outside"
          name="amenities"
          placeholder="E.g. Wi-fi, Pool"
          type="text"
          className="w-[500px]"
        />
        <Input
          isRequired
          errorMessage="Please enter at least one rule"
          label="Rules"
          labelPlacement="outside"
          name="rules"
          placeholder="E.g. No pets"
          type="text"
          className="w-[500px]"
        />
        <Button type="submit" variant="bordered">
          Submit
        </Button>
        {submitted && (
          <div className="text-small text-default-500">
            You submitted: <code>{JSON.stringify(submitted)}</code>
          </div>
        )}
      </Form>
    </>
  );
};

export default CreatePropertyForm;
