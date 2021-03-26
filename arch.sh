#!/bin/bash

TIMEZONE='Europe/London'
HOSTNAME='bogdan'
USER_NAME='bogdan'

configure() {
    echo 'Setting hostname'
    set_hostname

    echo 'Setting timezone'
    set_timezone

    echo 'Setting locale'
    set_locale
    
    echo 'Setting console keymap'
    set_keymap
    
    echo 'Setting hosts file'
    set_hosts
    
    if [ -z "$ROOT_PASSWORD" ]
    then
        echo 'Enter the root password:'
        stty -echo
        read -r ROOT_PASSWORD
        stty echo
    fi
    echo 'Setting root password'
    set_root_password "$ROOT_PASSWORD"

    if [ -z "$USER_PASSWORD" ]
    then
        echo "Enter the password for user $USER_NAME"
        stty -echo
        read -r USER_PASSWORD
        stty echo
    fi
    echo 'Creating initial user'
    create_user "$USER_NAME" "$USER_PASSWORD"
    
    echo 'Installing packages'
    install_packages
    
    echo 'Other'
    other
}

install_packages() {
    local packages=''

    # General utilities/libraries
    packages+='chromium networkmanager pulseaudio firefox awesome neovim net-tools openssh fd exa ripgrep exa sudo fish rofi'

    # Development packages
    packages+=' nodejs alacritty man-db code'

    # Misc programs
    packages+=' mpv ranger sxiv qbittorrent'

    # Xserver
    packages+=' xorg-server xorg-xinit'

    pacman -S --noconfirm $packages
}

set_hostname() {
    echo "$HOSTNAME" > /etc/hostname
}

set_timezone() {
    ln -sT "/usr/share/zoneinfo/$TIMEZONE" /etc/localtime
}

set_locale() {
    echo 'LANG="en_US.UTF-8"' >> /etc/locale.conf
    echo 'LC_COLLATE="C"' >> /etc/locale.conf
    echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
    locale-gen
}

set_keymap() {
    echo "KEYMAP=us" > /etc/vconsole.conf
}

set_hosts() {
    cat > /etc/hosts <<EOF
127.0.0.1 localhost
::1       localhost
EOF
}

set_root_password() {
    local password="$1"; shift
    echo -en "$password\n$password" | passwd
}

create_user() {
    local name="$1"; shift
    local password="$1"; shift
    useradd -m "$name"
    echo -en "$password\n$password" | passwd "$name"
}

other() {
    ln -s  /bin/nvim /bin/vim
    ln -s /bin/nvim /bin/vi
}

configure
