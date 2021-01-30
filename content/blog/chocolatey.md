---
title: Chocolatey, the package manager for Windows
description: Chocolatey has the largest online registry of Windows packages. Chocolatey packages encapsulate everything required to manage a particular piece of software into one deployment artifact by wrapping installers, executables, zips, and/or scripts into a compiled package file.
keywords: Chocolatey, DEV, Commands, PowerShell, Windows, Packages, Installers, Steff, Beckers, Blog
date: '2021-01-11T19:56'
tags: ['dev', 'windows', 'tools', 'powershell']
published: true
---

Chocolatey has the largest online registry of Windows packages. Chocolatey packages encapsulate everything required to manage a particular piece of software into one deployment artifact by wrapping installers, executables, zips, and/or scripts into a compiled package file.

https://chocolatey.org/

## Installation

https://chocolatey.org/install

## Useful commands

Check for outdated installed packages:

```powershell
choco outdated
```

Upgrade all installed packages at once:

```powershell
choco upgrade all -y
```

## Packages

https://chocolatey.org/packages

Steff's Chocolatey DEV-list:

```powershell
choco install 7zip.install -y
choco install autoclicker -y
choco install autohotkey -y
choco install azcopy10 -y
choco install azure-cli -y
choco install azure-data-studio -y
choco install bitnami-xampp -y
choco install cmder -y
choco install chocolateygui -y
#choco install databasenet -y # NOT USING ANYMORE
choco install dotnetcore-sdk -y
choco install fiddler -y
choco install filezilla -y
choco install firacode -y
choco install firefox -y
choco install git.install -y
choco install golang -y
choco install googlechrome -y
choco install heidisql -y
choco install httrack -y
choco install ilspy -y
choco install inkscape -y
choco install jdk8 -y
choco install jq -y
choco install kubernetes-cli -y
choco install kubernetes-helm -y
choco install kubernetes-kompose -y
choco install lessmsi -y
choco install linkshellextension -y
choco install microsoftazurestorageexplorer -y
choco install mongodb-compass -y
choco install mremoteng -y
choco install mysql -y
choco install mysql.workbench -y
choco install nmap -y
choco install nodejs-lts.install -y
choco install nomacs -y
choco install notepadplusplus.install -y
choco install nswagstudio -y
choco install openssl -y
choco install openvpn -y
choco install poshgit -y
choco install postman -y
choco install putty.portable -y
choco install python -y
choco install qdir -y
#choco install safari -y # DEPRECATED
choco install sharex -y
choco install skype -y
choco install slack -y
choco install spacesniffer -y
choco install sqlitebrowser -y
choco install sysinternals -y
choco install teamviewer -y
choco install treesizefree -y
choco install typora -y
choco install vim -y
choco install visualstudio-installer -y
choco install visualstudio2017-workload-vctools -y
choco install visualstudio2017buildtools -y
choco install vlc -y
choco install vnc-viewer -y
choco install vscode -y
choco install winscp.install -y
choco install wireshark -y
choco install xming -y
choco install zeplin -y
```
