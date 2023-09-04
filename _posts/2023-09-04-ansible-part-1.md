---
title: 'Ansible - Partie 1'
author: Maxime Vanderwegen
layout: post
image: /assets/images/ansible_background.webp
---

# **🚧 Cet article est toujours en chantier. Veuillez donc m'excuser s'il n'est pas complet**

Aujourd'hui, je vais vous parler d'Ansible, un outil d'automatisation codé en Python, conçu et maintenu par Red Hat.

## Qu'est-ce qu'_Ansible_ et à quoi peut-il servir ?

_Ansible_ est un outil disponible sous Linux et utilisable en ligne de commande, qui permet d'automatiser énormément de tâches. Il est maintenu par Red Hat, une société très connue des utilisateurs de Linux, et qui a vite fait grandir sa popularité dans le monde de l'automatisation. _Ansible_ est en effet un produit combinant plusieurs avantages :

- D'abord, il est gratuit, ce qui a facilité son adoption par le grand nombre ;
- Il est très simple d'utilisation ;
- Il est extensible grâce à de nombreux modules, ce qui le rend cross-platform et lui permet d'interagir avec énormément d'équipements, de types différents (ordinateurs et serveurs Linux/Windows, équipements réseau, firewalls...) ;
- Il est codé en Python et publié sous licence _open source_, ce qui le rend très évolutif ;

Ce guide servira avant tout de pense-bête, mais j'espère qu'il pourra servir à quiconque le lira également.

## Installation

_Ansible_ étant surtout destiné aux environnements d'entreprise, ce guide est basé sur l'utilisation de Cent OS Stream 9, soit - à l'heure d'écrire ces lignes - la dernière version de l'OS gratuit équivalent à _Red Hat Entreprise Linux_.

_Cent OS Stream_ est [téléchargeable directement sur le site du projet](https://www.centos.org/centos-stream/){:class=link} et est disponible en plusieurs formats selon votre besoin (container, image Cloud ou ISO).

Une fois _Cent OS_ installé, vous pouvez mettre à jour le système avec la commande `sudo yum update` avant d'installer _Ansible_ avec la commande `sudo yum install ansible -y`.

💡 Il vous est possible d'installer _Ansible_ dans sa version complète, incluant les modules nécessaires à l'automatisation de beaucoup d'équipements (paquet `ansible`), ou alors de n'installer que le moteur _Ansible_ (paquet `ansible-core`) et de sélectionner par vous-même les modules à installer.

Dans ce guide, nous partirons du principe que vous installez la version complète d'_Ansible_.

Différents fichiers de configuration sont disponibles dans le dossier `/etc/ansible`. Parmi eux se trouvent :

- <u>ansible.cfg</u>, qui contient la liste des paramètres liés à l'exécution d'_Ansible_
- <u>hosts</u>, qui contient la liste des hôtes et groupes d'hôtes configurables

## Création d'un utilisateur spécifique

Pour des raisons évidentes de sécurité, il est préférable de n'utiliser _Ansible_ qu'à travers un utilisateur dédié à cet usage et n'ayant aucun droits administrateurs.

Partant du principe que vous avez installé _Ansible_ avec l'utilisateur _root_, vous pouvez créer un utilisateur _ansible_ et l'autoriser à accéder en lecture, exécution et en modification au dossier `/etc/ansible` avec leux deux commandes suivantes :

```
# Ajouter l'utilisateur root au groupe ansible et le rendre propriétaire du dossier /etc/ansible
sudo chown -R root:ansible /etc/ansible

# Autoriser l'utilisateur root et le groupe d'utilisateurs ansible à lire et modifier la configuration d'Ansible
sudo chmod -R 770 /etc/ansible
```

Cela fait, vous pourrez installer des modules, éxecuter des commandes Ansible et modifier sa configuration sans avoir besoin de droits administrateurs.

## Installation de modules

Comme expliqué plus haut, _Ansible_ est extensible avec des modules, qui vous permettront d'automatiser une quantité impressionnante d'équipements. La liste des modules officiels est disponible [sur le site de documentation _Ansible_](https://docs.ansible.com/ansible/latest/collections/){:class=link}.

Si vous ne trouvez pas votre bonheur parmi les modules préinstallés avec le paquet `ansible`, vous pouvez en chercher avec la commande `ansible-galaxy collection list <nom de votre collection>`. Ainsi, si vous cherchez à automatiser des switches Cisco, vous devrez peut-être installer le paquet `cisco.ios` avec la commande `ansible-galaxy collection install cisco.ios`.

Cette commande peut être exécutée en tant que simple utilisateur et ne nécessite pas les droits _root_. Nous y reviendrons.