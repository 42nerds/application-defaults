# application-defaults

protoc --plugin=./node_modules/ts-protoc-gen/bin/protoc-gen-ts --go_out=plugins=grpc:. --ts_out="service=grpc-web:." --js_out="import_style=commonjs,binary:." application.proto