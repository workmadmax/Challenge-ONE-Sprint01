/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: madmax42 <madmax42@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/04/16 14:48:10 by madmax42          #+#    #+#             */
/*   Updated: 2023/04/16 17:02:13 by madmax42         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Selects the appropriate HTML elements
const textInput = document.getElementById('text-input');
const outputText = document.getElementById('output-text-after');
// Add click events to the buttons
const btnEncrypt = document.getElementById('btnEncrypt');
const btnDecrypt = document.getElementById('btnDecrypt');

btnEncrypt.addEventListener('click', () => {
	const encryptedText = encrypt(textInput.value);
	outputText.textContent = `After the encoder: ${encryptedText}`;
});

btnDecrypt.addEventListener('click', () => {
	const decryptedText = decrypt(textInput.value);
	outputText.textContent = `After the decoder: ${decryptedText}`;
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
