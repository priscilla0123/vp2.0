import Row from './row';
import Col from './col';
import Formline from './formline';
import Searchbox from './searchbox';
import Header1 from './header1';
import Header2 from './header2';
import {Util} from '../helper';

Util.register(Row);
Util.register(Col);
Util.register(Formline);
Util.register(Searchbox);
Util.register(Header1);
Util.register(Header2);

export { 
    Row,
    Col,
    Formline,
    Searchbox,
    Header1,
    Header2
};