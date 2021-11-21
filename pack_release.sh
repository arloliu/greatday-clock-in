#!/usr/bin/env bash
XZ_LEVEL="-6"
pkg_ver=`jq -r ".version" ./package.json`

mkdir -p ./release
rm -rf ./release/*


npm run build:linux

cp ./dist/"Greaday Genie-${pkg_ver}.AppImage" ./release/greatday-genie-linux-x64-v${pkg_ver}.AppImage

# archive linux unpacked binary
tmpdir=`mktemp -d`
mkdir -p $tmpdir/greatday-genie-v${pkg_ver}
cp -a ./dist/linux-unpacked/* $tmpdir/greatday-genie-v${pkg_ver}
archive_file="greatday-genie-linux-x64-v${pkg_ver}.tar.xz"
rm -f ./release/$archive_file
echo "Creating ./release/$archive_file linux archive..."
XZ_OPT="-T0 ${XZ_LEVEL}" tar -C $tmpdir -Jcf ./release/$archive_file .
rm -rf $tmpdir


npm run build:win64

cp ./dist/"Greaday Genie Setup ${pkg_ver}.exe" ./release/greatday-genie-win-x64-v${pkg_ver}-setup.exe

# archive linux unpacked binary
tmpdir=`mktemp -d`
mkdir -p $tmpdir/greatday-genie-v${pkg_ver}/
cp -a ./dist/win-unpacked/* $tmpdir/greatday-genie-v${pkg_ver}/
archive_file="greatday-genie-win-x64-v${pkg_ver}.tar.xz"
rm -f ./release/$archive_file
echo "Creating ./dist/$archive_file windows archive..."
XZ_OPT="-T0 ${XZ_LEVEL}" tar -C $tmpdir -Jcf ./release/$archive_file .
rm -rf $tmpdir

ls -alh ./release/
