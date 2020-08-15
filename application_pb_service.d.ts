// package: 
// file: application.proto

import * as application_pb from "./application_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MetadataServiceGetApplications = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof application_pb.Applications;
};

export class MetadataService {
  static readonly serviceName: string;
  static readonly GetApplications: MetadataServiceGetApplications;
}

type ApplicationServiceGetMetadata = {
  readonly methodName: string;
  readonly service: typeof ApplicationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof application_pb.Application;
};

type ApplicationServiceGetView = {
  readonly methodName: string;
  readonly service: typeof ApplicationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof application_pb.ViewRequest;
  readonly responseType: typeof application_pb.ViewResponse;
};

export class ApplicationService {
  static readonly serviceName: string;
  static readonly GetMetadata: ApplicationServiceGetMetadata;
  static readonly GetView: ApplicationServiceGetView;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MetadataServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getApplications(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: application_pb.Applications|null) => void
  ): UnaryResponse;
  getApplications(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: application_pb.Applications|null) => void
  ): UnaryResponse;
}

export class ApplicationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getMetadata(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: application_pb.Application|null) => void
  ): UnaryResponse;
  getMetadata(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: application_pb.Application|null) => void
  ): UnaryResponse;
  getView(
    requestMessage: application_pb.ViewRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: application_pb.ViewResponse|null) => void
  ): UnaryResponse;
  getView(
    requestMessage: application_pb.ViewRequest,
    callback: (error: ServiceError|null, responseMessage: application_pb.ViewResponse|null) => void
  ): UnaryResponse;
}

