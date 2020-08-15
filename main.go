package main

import (
	"context"
	"log"
	"net"

	"google.golang.org/grpc"
	empty "github.com/golang/protobuf/ptypes/empty"

	"github.com/42nerds/application-defaults/proto/application"
)

const (
	port = ":50051"
)

// server is used to implement helloworld.GreeterServer.
type server struct {
	application.UnimplementedMetadataServiceServer
}

// SayHello implements helloworld.GreeterServer
func (s *server) GetMetadata(ctx context.Context, in *empty.Empty) (*application.Application, error) {
	log.Println("Received")
	return &application.Application{Name: "Website-Builder"}, nil
}
func (s *server) GetView(ctx context.Context, in *application.ViewRequest) (*application.ViewResponse, error) {
	log.Println("Received")
	return &application.ViewResponse{View: &application.View{}}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	application.RegisterApplicationServiceServer(s, &server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

}