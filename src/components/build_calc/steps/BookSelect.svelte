<script lang="ts">
    import Dropdown from "../../generic/Dropdown.svelte";
    import type BuildCalculator from "../../../code/BuildCalculator";
    import EngravingFrame from "../../engraving/EngravingFrame.svelte";
    import LoadingImg from "../../../assets/img/default_loading.gif";
    import Button from "../../generic/Button.svelte";
    import DAO from "../../../code/DAO";
    import Utils from "../../../code/Utils";

    export let builder: BuildCalculator;

    builder.createBooksFromBuild();

	let build = builder.getBuild();

	let region = DAO.getSelectedRegion();
	let prices = DAO.httpGet(`${DAO.global.marketURL}${region}?category=Engraving%20Recipe`).then(data => {
		const result: {[key: string]: number[]} = {};
		for (const price of data) {
			for (const chosenBook of builder.getBooks()) {
				const bookClass = DAO.getEngraving(chosenBook.eKey).class;
				const classPrefix = bookClass ? Utils.firstToUpper(bookClass) : '';

				const eKeyWithClass = classPrefix + chosenBook.eKey;
				const pKey = Utils.toEngravingFormat(price.id).substring(0, eKeyWithClass.length);

				if (pKey === eKeyWithClass) {
					if (!result[chosenBook.eKey]) {
						result[chosenBook.eKey] = [0];
                    }

					result[chosenBook.eKey][parseInt(price.rarity)] = price.lowPrice;
				}
			}
        }

        for (const ps in result) {
			for (const pk in result[ps]) {
				result[ps][pk] = 0;
				for (const pi in result[ps]) {
					if (pi <= pk) continue;
					result[ps][pk] += result[ps][pi] * 20;
				}
            }
        }

		return result;
    });

    const options = {
        "0": "Not learned",
        "1": "Learned green (+3)",
        "2": "Learned blue (+6)",
        "3": "Learned purple (+9)",
        "4": "Learned yellow (+12)",
    };
</script>

<div class="flex flex-col h-full">
    <div class="flex flex-row h-full flex-wrap">
        <div class="flex flex-col flex-wrap w-1/2 pr-1">
            {#each builder.getBooks() as b}
                <div class="flex flex-row flex-wrap pb-1">
                    <div class="relative w-16 h-16">
                        <EngravingFrame engraving={DAO.getEngraving(b.eKey)} />
                    </div>
                    <div class="flex flex-col flex-grow">
                        <div class="flex bg-gray-900 text-gray-400 p-1 justify-center">
                            {DAO.getEngraving(b.eKey).name}
                            {#await prices}
                                <img class='w-full h-full' src={LoadingImg} />
                            {:then prices}
                                (price: {prices[b.eKey][b.points]})
                            {:catch error}
                                <!-- Doing nothing in case of error -->
                            {/await}
                            <input class="justify-items-end" name="plan" type="checkbox">
                        </div>
                        <Dropdown bind:value={b.points} {options} />
                    </div>
                </div>
            {/each}
        </div>
        <div class="desc-section">
            <h1 class="text-center">Some description:</h1>
            <p>Description of this page ................................</p>
        </div>
    </div>
</div>
<Button text="Next" on:click />
