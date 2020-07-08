type Address = number;
type Identifire = string;
type Style = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

type Variable = [Identifire, Address];
type VariableRecode = [Address, Variable, Style?];

type Data = number | string | Address;
type DataRecode = [Address, Data, Style?];

type Snapshot = {
  [area: string]: VariableRecode[] | DataRecode[],
  variableArea: VariableRecode[],
  dataArea: DataRecode[],
};

const variableTable: VariableRecode[] = [
  [1002, null],
  [1003, ["a", undefined], "info"],
  [1004, null],
  [1005, null],
];

const dataTable: DataRecode[] = [
  [5002, null],
  [5003, "abc"],
  [5004, null],
  [5005, null],
];

const snap: Snapshot = {
  variableArea: [],
  dataArea: [],
  objectArea0: [],
  objectArea1: [],
};

const va = snap.variableArea;
const [address, variablb, style] = va[0];
const da = snap.dataArea;
const [add, data] = da[0];
const oa = snap.objectArea0;
const [addr, d, s] = oa[0];
console.log(typeof d);
