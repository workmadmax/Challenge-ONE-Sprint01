/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: madmax42 <madmax42@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/04/16 14:48:10 by madmax42          #+#    #+#             */
/*   Updated: 2023/04/16 16:18:16 by madmax42         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Selects the appropriate HTML elements
const textInput = document.getElementById('text-input');
const outputText = document.getElementById('output-text-after');
// Add click events to the buttons
const btnEncrypt = document.getElementById('btnEncrypt');

function encrypt(text)
{
	let result = '';

	for (let i = 0; i < text.length; i++)
	{
		switch (text[i])
		{
			case 'e':
				result += 'enter';
				break;
			case 'i':
				result += 'imes';
				break;
			case 'a':
				result += 'ai';
				break;
			case 'o':
				result += 'ober';
				break;
			case 'u':
				result += 'ufat';
				break;
			default:
				result += text[i];
		}
	}
	return result;
}

function decrypt(text)
{
	let result = '';
	let i = 0;
	while (i < text.length)
	{
		switch (text.slice(i, i + 5))
		{
			case 'enter':
				result += 'e';
				i += 5;
				break;
			case 'imes':
				result += 'i';
				i += 4;
				break;
			case 'ai':
				result += 'a';
				i += 2;
				break;
			case 'ober':
				result += 'o';
				i += 4;
				break;
			case 'ufat':
				result += 'u';
				i += 4;
				break;
			default:
				result += text[i];
				i++;
		}
	}
	return result;
}



btnEncrypt.addEventListener('click', () =>
{
  const encryptedText = encrypt(textInput.value);
  outputText.textContent = `After the encoder: ${encryptedText}`;
});

const btnDecrypt = document.getElementById('btnDecrypt');

btnDecrypt.addEventListener('click', () =>
{
  const decryptedText = decrypt(textInput.value);
  outputText.textContent = `After the decoder: ${decryptedText}`;
});