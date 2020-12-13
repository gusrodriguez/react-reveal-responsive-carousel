import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

// avoid typescript error
const globalAny: any = global;

// configure jsdom for allowing enzyme to mount the compnoents
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;

globalAny.document = document;
globalAny.window = document.defaultView;

// configure the adapter
Enzyme.configure({ adapter: new Adapter() });
