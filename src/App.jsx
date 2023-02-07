import { ComboBox, CountrySelect } from "./ComboBox";
import { ButtonsDeleteSend, ColorButtons, ComplexButton, LoadingButtonsTransition, UploadButtons } from "./Boton"
import { ColorCheckboxes } from "./CheckBox";
import { FloatingActionButtons } from "./FloatingButton";
import { RadioButtonsGroup } from "./RadioButton";
import { BasicSelect } from "./Select";
import { TableJson } from "./Tables/TableJson";
import { TableAxios } from "./Tables/TableAxios";


function App() {
  return (
    <div className="container mt-2">
  
      <ComboBox />
      <br />
      <CountrySelect />
      <br />
      <ColorButtons />
      <br />
      <UploadButtons />
      <br />
      <ButtonsDeleteSend />
      <br />
      <ComplexButton />
      <br />
      <LoadingButtonsTransition />
      <br />
      <ColorCheckboxes />
      <br />
      <FloatingActionButtons />
      <br />
      <RadioButtonsGroup />
      <br />
      <BasicSelect />
      <br />
      <TableJson />
      <br />
      <TableAxios />
    </div>
  );
}

export default App;
