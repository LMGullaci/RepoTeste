<aura:application extends="force:slds">
    <h1 class="slds-text-heading_large">
        My Products
    </h1>
    <c:Table config='{"columns":[{"label":"Name","field":"ProductName"},{"label":"Unity Price","field":"UnityPrice"},{"label":"Cost Price","field":"CostPrice"},{"label":"Type","field":"Type"}],"body":[{"ProductName":"Product 1","UnityPrice":"$ 8.20","CostPrice":"$3.40","Type":"Health and Care"},{"ProductName":"Product 2","UnityPrice":"$ 5.20","CostPrice":"$1.40","Type":"Health and Care"},{"ProductName":"Product 3","UnityPrice":"$ 3.70","CostPrice":"$1.20","Type":"Health and Care"},{"ProductName":"Product 4","UnityPrice":"$ 4.90","CostPrice":"$0.80","Type":"Health and Care"}]}'/>
</aura:application>