/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: madmax42 <madmax42@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/04/16 14:48:10 by madmax42          #+#    #+#             */
/*   Updated: 2023/04/17 10:32:06 by madmax42         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const textInput = document.getElementById('text-input');
const outputText = document.getElementById('output-text-after');
const btnEncrypt = document.getElementById('btnEncrypt');
const btnDecrypt = document.getElementById('btnDecrypt');

function validateInput(str)
{
	const normalizedStr = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	return /^[a-z\s]+$/.test(normalizedStr);
}

function addCopyButton(text)
{
	let copyButton = document.getElementById('copy-button');

	if (!copyButton)
	{
		copyButton = document.createElement('button');
		copyButton.id = 'copy-button';
		copyButton.textContent = 'Copy';
		copyButton.style.backgroundColor = 'blue';
		copyButton.style.color = 'white';
		copyButton.style.borderRadius = '5px';
		copyButton.style.padding = '10px';
		copyButton.style.marginLeft = '10px';
		copyButton.style.marginTop = '10px';
		outputText.insertAdjacentElement('afterend', copyButton);
	}
	copyButton.removeEventListener('click', copyEventHandler);
	copyButton.addEventListener('click', copyEventHandler);
	function copyEventHandler()
	{
		navigator.clipboard.writeText(text);
	}
}

btnEncrypt.addEventListener('click', () =>
{
	if (/[A-Z]/.test(textInput.value))
	{
		alert('The input should not contain uppercase letters');
		return;
	}
	const textToEncrypt =
			textInput.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
	if (!validateInput(textToEncrypt))
	{
		alert('Only lowercase letters and no accent!');
		return;
	}
	const encryptedText = encrypt(textToEncrypt);
	outputText.textContent = `${encryptedText}`;
	const alertTitle = document.getElementById('alert-title');
	const alertMsg = document.getElementById('alert-msg');
	alertTitle.style.display = 'none';
	alertMsg.style.display = 'none';
	addCopyButton(encryptedText);
	textInput.value = '';
});

btnDecrypt.addEventListener('click', () =>
{
	if (/[A-Z]/.test(textInput.value))
	{
		alert('The input should not contain uppercase letters');
		return;
	}
	const textToDecrypt =
			textInput.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
	const decryptedText = decrypt(textToDecrypt);
	outputText.textContent = `${decryptedText}`;
	const alertTitle = document.getElementById('alert-title');
	const alertMsg = document.getElementById('alert-msg');
	alertTitle.style.display = 'none';
	alertMsg.style.display = 'none';
	addCopyButton(decryptedText);
	textInput.value = '';
});

// Encryption and decryption functions

function encrypt(text)
{
	const encryptedText = text
		.replace(/e/g, 'enter')
		.replace(/i/g, 'imes')
		.replace(/a/g, 'ai')
		.replace(/o/g, 'ober')
		.replace(/u/g, 'ufat');
	return encryptedText;
}

function decrypt(text)
{
	const decryptedText = text
		.replace(/enter/g, 'e')
		.replace(/imes/g, 'i')
		.replace(/ai/g, 'a')
		.replace(/ober/g, 'o')
		.replace(/ufat/g, 'u');
	return decryptedText;
}