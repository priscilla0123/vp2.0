import Overlay from './components/overlay';
import Mask from './components/mask';
import Alert from './components/alert';
import Toast from './components/toast';
import Picker from './components/picker';
import CityPicker from './components/citypicker';
import { Yearpanel, Monthpanel, Datepanel, Timepanel, Yearpicker, Monthpicker, Datepicker, Datetimepicker, Daterangepicker, Datetimerangepicker } from './components/datepicker';
import { Tabs, TabPanel } from './components/tab';
import Button from './components/button';
import Suggestion from './components/suggestion';
import Checkbox from './components/checkbox';
import Radio from './components/radio';
import Select from './components/select';
import Pager from './components/pager';
import { Datagrid, Basegrid } from './components/datagrid';
import Dialog from './components/dialog';
import { WaterFall, WaterFallItem } from './components/waterfall';
import Timeline from './components/timeline';
import Uploader from './components/uploader';
import ProgressBar from './components/progressbar';
import Tip from './components/tip';
import Chart from './components/chart';
import Icon from './components/icon';
//--------------------------------------------------------
import { Row, Col, Formline, Searchbox, Header1, Header2 } from './layout';
//--------------------------------------------------------
import Tablepager from './modules/tablepager';
import Radiogroup from './modules/radiogroup';
import Checkboxgroup from './modules/checkboxgroup';
import Datepair from './modules/datepair';
import Uploaderlist from './modules/uploaderlist';
//--------------------------------------------------------
import Valid from './directives/valid';
import AutoPosition from './directives/autoposition';
import Clickoutside from './directives/clickoutside';
import { Drag, DragDrop } from './directives/drag';
import Tooltip from './directives/tooltip';
var Components = [
    Overlay, Mask, Alert, Toast,
    Picker, CityPicker, Yearpanel, Monthpanel, Datepanel, Timepanel, Yearpicker, Monthpicker, Datepicker, Datetimepicker, Daterangepicker, Datetimerangepicker,
    Tabs, TabPanel,
    Button, Checkbox, Radio, Select,
    Pager, Datagrid, Basegrid,Dialog,
    WaterFall, WaterFallItem, Timeline, Uploader, Tip, ProgressBar, Chart
];
var Modules = [
    Tablepager,
    Radiogroup,
    Checkboxgroup,
    Datepair,
    Uploaderlist,
    Tip
];
var Directives = [
    Valid,
    AutoPosition,
    Clickoutside,
    Drag, DragDrop,
    Tooltip
];
var Layouts = [
    Row,
    Col,
    Formline,
    Searchbox,
    Header1,
    Header2
];

function install(Vue) {
    for (let Component of Components) {
        Vue.use(Component);
    }
    for (let Module of Modules) {
        Vue.use(Module);
    }
    for (let Directive of Directives) {
        Vue.use(Directive);
    }
    for (let Layout of Layouts) {
        Vue.use(Layout);
    }
}
export {
    Overlay,
    Mask,
    Alert,
    Toast,
    Picker,
    CityPicker,
    Yearpanel,
    Monthpanel,
    Datepanel,
    Timepanel,
    Yearpicker,
    Monthpicker,
    Datepicker,
    Datetimepicker,
    Daterangepicker,
    Datetimerangepicker,
    Datepair,
    Tabs,
    TabPanel,
    Button,
    Suggestion,
    Checkbox,
    Checkboxgroup,
    Radio,
    Radiogroup,
    Select,
    Pager,
    Datagrid,
    Basegrid,
    Tablepager,
    Dialog,
    WaterFall,
    WaterFallItem,
    Timeline,
    Uploader,
    Tip,
    ProgressBar,
    Chart,
    Icon,
    Valid,
    AutoPosition,
    Clickoutside,
    Drag,
    DragDrop,
    Tooltip,
    Uploaderlist,
    Row,
    Col,
    Formline,
    Searchbox, 
    Header1,
    Header2
};
export default { install };
