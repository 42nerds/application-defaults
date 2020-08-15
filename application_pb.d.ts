// package: 
// file: application.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Application extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getSelfUrl(): string;
  setSelfUrl(value: string): void;

  hasImageData(): boolean;
  clearImageData(): void;
  getImageData(): Uint8Array | string;
  getImageData_asU8(): Uint8Array;
  getImageData_asB64(): string;
  setImageData(value: Uint8Array | string): void;

  hasIconUrl(): boolean;
  clearIconUrl(): void;
  getIconUrl(): string;
  setIconUrl(value: string): void;

  clearMenuItemsList(): void;
  getMenuItemsList(): Array<Application.MenuItem>;
  setMenuItemsList(value: Array<Application.MenuItem>): void;
  addMenuItems(value?: Application.MenuItem, index?: number): Application.MenuItem;

  clearViewsList(): void;
  getViewsList(): Array<View>;
  setViewsList(value: Array<View>): void;
  addViews(value?: View, index?: number): View;

  getIconCase(): Application.IconCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Application.AsObject;
  static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Application;
  static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
  export type AsObject = {
    name: string,
    path: string,
    selfUrl: string,
    imageData: Uint8Array | string,
    iconUrl: string,
    menuItemsList: Array<Application.MenuItem.AsObject>,
    viewsList: Array<View.AsObject>,
  }

  export class MenuItem extends jspb.Message {
    getText(): string;
    setText(value: string): void;

    getAction(): string;
    setAction(value: string): void;

    getIcon(): string;
    setIcon(value: string): void;

    clearSubmenuItemsList(): void;
    getSubmenuItemsList(): Array<Application.MenuItem>;
    setSubmenuItemsList(value: Array<Application.MenuItem>): void;
    addSubmenuItems(value?: Application.MenuItem, index?: number): Application.MenuItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MenuItem.AsObject;
    static toObject(includeInstance: boolean, msg: MenuItem): MenuItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MenuItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MenuItem;
    static deserializeBinaryFromReader(message: MenuItem, reader: jspb.BinaryReader): MenuItem;
  }

  export namespace MenuItem {
    export type AsObject = {
      text: string,
      action: string,
      icon: string,
      submenuItemsList: Array<Application.MenuItem.AsObject>,
    }
  }

  export enum IconCase {
    ICON_NOT_SET = 0,
    IMAGE_DATA = 4,
    ICON_URL = 5,
  }
}

export class Applications extends jspb.Message {
  clearApplicationsList(): void;
  getApplicationsList(): Array<Application>;
  setApplicationsList(value: Array<Application>): void;
  addApplications(value?: Application, index?: number): Application;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Applications.AsObject;
  static toObject(includeInstance: boolean, msg: Applications): Applications.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Applications, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Applications;
  static deserializeBinaryFromReader(message: Applications, reader: jspb.BinaryReader): Applications;
}

export namespace Applications {
  export type AsObject = {
    applicationsList: Array<Application.AsObject>,
  }
}

export class ViewRequest extends jspb.Message {
  getViewName(): string;
  setViewName(value: string): void;

  clearParametersList(): void;
  getParametersList(): Array<ViewRequest.Param>;
  setParametersList(value: Array<ViewRequest.Param>): void;
  addParameters(value?: ViewRequest.Param, index?: number): ViewRequest.Param;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ViewRequest): ViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewRequest;
  static deserializeBinaryFromReader(message: ViewRequest, reader: jspb.BinaryReader): ViewRequest;
}

export namespace ViewRequest {
  export type AsObject = {
    viewName: string,
    parametersList: Array<ViewRequest.Param.AsObject>,
  }

  export class Param extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Param.AsObject;
    static toObject(includeInstance: boolean, msg: Param): Param.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Param, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Param;
    static deserializeBinaryFromReader(message: Param, reader: jspb.BinaryReader): Param;
  }

  export namespace Param {
    export type AsObject = {
      key: string,
      value: string,
    }
  }
}

export class ViewResponse extends jspb.Message {
  hasView(): boolean;
  clearView(): void;
  getView(): View | undefined;
  setView(value?: View): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ViewResponse): ViewResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewResponse;
  static deserializeBinaryFromReader(message: ViewResponse, reader: jspb.BinaryReader): ViewResponse;
}

export namespace ViewResponse {
  export type AsObject = {
    view?: View.AsObject,
  }
}

export class View extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  clearActionButtonsList(): void;
  getActionButtonsList(): Array<View.Button>;
  setActionButtonsList(value: Array<View.Button>): void;
  addActionButtons(value?: View.Button, index?: number): View.Button;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): View.AsObject;
  static toObject(includeInstance: boolean, msg: View): View.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: View, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): View;
  static deserializeBinaryFromReader(message: View, reader: jspb.BinaryReader): View;
}

export namespace View {
  export type AsObject = {
    name: string,
    title: string,
    actionButtonsList: Array<View.Button.AsObject>,
  }

  export class Button extends jspb.Message {
    getText(): string;
    setText(value: string): void;

    getTheme(): string;
    setTheme(value: string): void;

    getIcon(): string;
    setIcon(value: string): void;

    getAction(): string;
    setAction(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Button.AsObject;
    static toObject(includeInstance: boolean, msg: Button): Button.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Button, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Button;
    static deserializeBinaryFromReader(message: Button, reader: jspb.BinaryReader): Button;
  }

  export namespace Button {
    export type AsObject = {
      text: string,
      theme: string,
      icon: string,
      action: string,
    }
  }
}

