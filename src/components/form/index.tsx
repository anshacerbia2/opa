import { useCallback, useEffect, useState } from "react";
import { mutationApiSlice } from "../../redux/apis/mutation/index.api";
import { useAppDispatch } from "../../redux/hooks";
import { showModal } from "../../redux/slices/global.slice";

export interface IFormProps {
  formType: string;
  formPrefix: any;
  formState: any;
  formApi: string;
}

const chunkArrayData = (array: any[], size: number) => {
  let index = 0;
  const chunkedArray = [];
  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index += size;
  }
  console.log(chunkArrayData, ">>");

  return chunkedArray;
};

const Form = ({ formType, formPrefix, formState, formApi }: IFormProps) => {
  const [input, setInput] = useState<any>(null);
  const [chunkedFormPrefix, setChunkedFormPrefix] = useState<any>(null);
  const mutation = mutationApiSlice.endpoints[formApi]?.useMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mutation[1].isSuccess && mutation[1].data) {
      dispatch(
        showModal({
          title: "Success",
          isSuccess: true,
          isError: false,
          form: null,
          message: `Agent with ID ${mutation[1].data.id} has been successfully updated!`,
          timeout: 3000,
        })
      );
    }
    if (mutation[1].isError && mutation[1].error) {
      dispatch(
        showModal({
          title: "Error",
          isSuccess: false,
          isError: true,
          form: null,
          message: mutation[1].error.data.title,
          timeout: 3000,
        })
      );
    }
  }, [mutation]);

  useEffect(() => {
    if (formState && Object.keys(formState).length && formType === "Update") {
      setInput({ ...formState });
    }
  }, [formState]);

  useEffect(() => {
    if (formPrefix.length) {
      if (formType === "Create") {
        setChunkedFormPrefix(
          chunkArrayData(
            formPrefix.filter((obj: any) => obj.prefix !== "id"),
            2
          )
        );
      }
      if (formType === "Update") {
        setChunkedFormPrefix(chunkArrayData(formPrefix, 2));
      }
    }

    if (formType === "Create") {
      const tempInput: any = {};
      formPrefix.forEach((obj: any) => {
        if (obj.prefix !== "id") {
          tempInput[obj.prefix] = "";
        }
      });
      setInput(tempInput);
    }
  }, [formPrefix]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;
      const isMutable = formPrefix.find(
        (obj: any) => obj.prefix === name
      )?.mutable;

      if (!isMutable) return;

      setInput((prevState: any) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    },
    [formPrefix, formState]
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      if (!mutation) return;
      await mutation[0](input);
    } catch (error) {
      console.log("Error on submitting form: ", error);
    }
  };

  if (
    (formType !== "Create" && formType !== "Update") ||
    !chunkedFormPrefix ||
    !input ||
    !Object.keys(input).length ||
    !mutation
  ) {
    return null;
  }

  return (
    <>
      {/* {mutation[1].isError && mutation[1].error && (
        <div className="c-form-error-message">
          {mutation[1].error.data.title}
        </div>
      )} */}
      <form onSubmit={handleSubmit}>
        {chunkedFormPrefix &&
          chunkedFormPrefix.map((array: [], index: number) => {
            return (
              <div className="c-form-group" key={`chunked-array-${index}`}>
                <div className="c-row">
                  {array.map((prefix: any) => {
                    return (
                      <div
                        key={`input-${prefix.prefix}`}
                        className="c-col-2 c-form-group-floating c-form-bottom-animation"
                      >
                        <input
                          type={prefix.type}
                          className="c-form-control"
                          name={prefix.prefix}
                          value={input[prefix.prefix]}
                          onChange={handleChange}
                          placeholder={prefix.title}
                          autoComplete="off"
                        />
                        <div className="c-control-label-wrapper">
                          <label className="c-control-label">
                            {prefix.title}
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        <button
          type="submit"
          className="c-btn c-btn-primary"
          style={{ marginLeft: "auto", display: "flex" }}
        >
          {mutation[1].isLoading ? "Loading" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default Form;
