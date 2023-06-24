declare namespace FH {
  // The behavior of Auto-Lightframe can be customized via the API’s FH.autoLightframe method. The method takes one argument, an options object that accepts the following properties:
  //
  //     - container: (DOM element) Only FareHarbor links that are descendants of the given container element will trigger a Lightframe. The element can be a single link itself. Defaults to the whole document.
  //     - className: (string) Only FareHarbor links with given class will trigger a Lightframe.
  //     - callback: (Function) Called when a Lightframe link is clicked, just before the Lightframe opens or redirection occurs. The function will be passed the anchor element as the first argument.
  //     - overrideOnclick: (boolean|'all') By default, Auto-Lightframe will not execute on any links that have an onclick attribute. Set to true to disable this behavior and run on all anchor tags whose onclick attribute does not contain an FH.open() call. NOTE: the code in the onclick attribute will not be executed. Set to 'all' to run on all anchor tags regardless of onclick attribute.
  //
  // For convenience, passing a string to FH.autoLightframe is the same as passing { className: 'your-string' }, and passing a DOM Element is the same as passing { container: theDomElement }.
  function autoLightframe(
    options:
      | {
          container?: HTMLElement;
          className?: string;
          callback: Function;
          overrideOnClick?: boolean | "all";
        }
      | string
      | HTMLElement
  ): any;

  // This is an alternative to Auto-Lightframe, but does not provide any more functionality. However, FH.open can be used in any event handler code. Returns true if the Lightframe was opened, and false otherwise.
  function open(options: {
    shortname: string;
    flow?: number;
    asn?: string;
    asnRef?: number;
    ref?: string;
    view?:
      | "items"
      | "all-availability"
      | { item: number; availability?: number };
  }): boolean;

  // Calling FH.close closes the Lightframe if it is open, and returns true. When it is not open it returns false. It has no other options.
  function close(): boolean;
}
