# Project Name

Apateez

## Related Projects

  ##### Reviews
  - https://github.com/feastbeast/reviews

  ##### Nearby
  - https://github.com/feastbeast/nearby

  ##### Sidebar
  - https://github.com/feastbeast/sidebar

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

### Starting Project

From within the root directory:

##### Installing Dependencies
```sh
npm install
```
##### Generating Data
```sh
npm run generate-csv
```
##### Seeding Database
1. Create postgres database 'gallery'
2. Copy CSV file into gallery

From within Postgres server, connect to gallery:
```sh
\connect gallery
```
```sh
\copy lists(place_id,name,photos) from '/path/to/10MCSV.csv' delimiter '|' csv header;
```
##### Building Compiled Bundles
```sh
npm run build
```
##### Starting Server
```sh
npm start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 8.11.2

## Development